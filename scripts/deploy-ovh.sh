#!/usr/bin/env bash
# Met en ligne out/ sur l'hébergement OVH par FTP (lftp).
#
# Identifiants dans .ftp.local, à la racine du projet (ignoré par git via *.local) :
#   FTP_HOST=sftp://ftp.clusterXXX.hosting.ovh.net   (SFTP, port 22)
#   FTP_USER=identifiant-ftp
#   FTP_PASS='mot-de-passe'
#   FTP_DIR=www            # dossier racine du domaine (onglet Multisite d'OVH)
#
# Usage :
#   npm run build
#   scripts/deploy-ovh.sh --dry-run   # montre ce qui serait envoyé, sans rien changer
#   scripts/deploy-ovh.sh             # sauvegarde le site en ligne, puis envoie out/
#
# Chaque envoi commence par une copie complète du dossier distant dans
# nouveaudoc/sauvegardes/ : pour revenir en arrière, renvoyer cette copie.
# Les fichiers distants absents de out/ ne sont PAS supprimés (voir --list-extra).
set -euo pipefail
cd "$(dirname "$0")/.."

[ -f .ftp.local ] || { echo "Fichier .ftp.local manquant (voir l'en-tête du script)." >&2; exit 1; }
# shellcheck disable=SC1091
source .ftp.local
: "${FTP_HOST:?FTP_HOST manquant}" "${FTP_USER:?FTP_USER manquant}" "${FTP_PASS:?FTP_PASS manquant}"
FTP_DIR=${FTP_DIR:-www}
export LFTP_PASSWORD="$FTP_PASS"

ftp() { lftp --env-password -u "$FTP_USER" "$FTP_HOST" -e "set ftp:ssl-allow yes; set sftp:auto-confirm yes; set net:max-retries 2; $1; bye"; }

case "${1:-}" in
  --list-extra)
    # Fichiers présents sur le serveur mais pas dans out/ (restes de l'ancien site).
    ftp "mirror -R --dry-run --delete --exclude-glob .DS_Store out $FTP_DIR" | grep -E '^(rm|Removing)' || echo "Aucun fichier en trop."
    exit 0 ;;
  --dry-run)
    ftp "mirror -R --dry-run --exclude-glob .DS_Store out $FTP_DIR"
    exit 0 ;;
esac

[ -f out/.htaccess ] || { echo "out/ incomplet : lancer npm run build d'abord." >&2; exit 1; }

BACKUP="nouveaudoc/sauvegardes/$FTP_DIR-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP"
echo "Sauvegarde du site en ligne dans $BACKUP"
ftp "mirror --parallel=4 $FTP_DIR $BACKUP"

echo "Envoi de out/ vers $FTP_DIR"
ftp "mirror -R --parallel=4 --verbose --exclude-glob .DS_Store out $FTP_DIR"
echo "Terminé. Vérifier : curl -sI https://depannage-gemeaux.fr/tarifs (doit être text/html)."

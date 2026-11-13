import { Fragment } from "react";

// Liste de villes en gras : « Lannion, Guingamp et Callac ».
export default function Villes({ list }) {
  return list.map((ville, i) => (
    <Fragment key={ville}>
      {i > 0 && (i === list.length - 1 ? " et " : ", ")}
      <strong>{ville}</strong>
    </Fragment>
  ));
}

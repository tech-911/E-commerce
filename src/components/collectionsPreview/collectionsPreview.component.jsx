import React from "react";
import "./collectionsPreview.styles.scss";

function CollectionsPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((value, iex) => iex < 4)
          .map((items) => {
            return <div key={items.id}>{items.name}</div>;
          })}
      </div>
    </div>
  );
}

export default CollectionsPreview;

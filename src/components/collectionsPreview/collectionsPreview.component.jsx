import React from "react";
import "./collectionsPreview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";
function CollectionsPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((value, iex) => iex < 4)
          .map((item) => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
}

export default CollectionsPreview;

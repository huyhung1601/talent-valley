export const FilteredItems = ({ filteredItems, handleClickItem }) => {
  return (
    <div
      className="border position-absolute px-3 overflow-auto text-sm bg-light"
      style={{
        width: "calc(100% - 75px)",
        maxHeight: "150px",
        top: "42px",
        right: 0,
        zIndex: 1000,
      }}
    >
      <ul className="p-1 m-0">
        {filteredItems.length === 0 && (
          <li className="p-1">
            <h6>No items matching!</h6>
          </li>
        )}
        {filteredItems?.map((item, index) => (
          <li
            className={`text-decoration-none row text-muted  p-1 ${
              index !== filteredItems.length - 1 ? "border-bottom" : ""
            }`}
            key={item.id}
            onClick={() => handleClickItem(item.id)}
            type="button"
          >
            <p className="col">
              <span style={{ fontWeight: "bold" }}>Title:</span>
              <span> {item.title}</span>
            </p>
            <p className="col">
              <span style={{ fontWeight: "bold" }}>Location:</span>
              <span> {item.location}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

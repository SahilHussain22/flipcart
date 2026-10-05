function Categories() {
  const categories = [
    "🛍️ Top Offers",
    "📱 Mobiles",
    "💻 Electronics",
    "👕 Fashion",
    "🏠 Home",
    "📺 Appliances",
    "✈️ Travel",
    "🧸 Toys",
    "🚗 Vehicles"
  ];

  return (
    <div className="categories">

      {categories.map((category, index) => (
        <div className="category" key={index}>
          <div className="category-icon">
            {category.split(" ")[0]}
          </div>

          <p>
            {category.substring(category.indexOf(" ") + 1)}
          </p>
        </div>
      ))}

    </div>
  );
}

export default Categories;
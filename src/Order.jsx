import Pizza from "./Pizza";



export default function Order() {
  const pizzaType = "pepperoni";
  const pizzaSize = "M"

  return (
    <div className="order">
        <h2>Create Order</h2>
      <form>
        <div>
          <div>
            <label htmlFor="pizza-type"></label>
            <select name="pizza-type" value={pizzaType}>
              <option value="pepparoni">the pepperoni</option>
              <option value="pepparoni">the hawaiian</option>
              <option value="pepparoni">the big Meat</option>
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza size</label>
            <span>
                <input type="radio" value={"S"} id="pizza-S" name="pizza-size" checked={pizzaSize==="S"}/>
                <label htmlFor="pizza-s">small</label>
            </span>
            
            <span>
                <input type="radio" value={"M"} id="pizza-M" name="pizza-size" checked={pizzaSize==="M"}/>
                <label htmlFor="pizza-m">medium</label>
            </span>
            
            <span>
                <input type="radio" value={"L"} id="pizza-L" name="pizza-size" checked={pizzaSize==="L"}/>
                <label htmlFor="pizza-l">large</label>
            </span>
          </div>
          <button type="submit">Add to Cart</button>
        </div>
      </form>
    </div>
  );
}

import { useState } from "react";
import Item from "./Item";
import OrderModal from "./OrderModal";
import {useSelector } from "react-redux";


function Menu() {
  const menu = useSelector(state => state.menu)

  const [modalOn, setModalOn] = useState(false);
  const [modalMenu, setModalMenu] = useState(null);
  if (!menu) // console.log(menu) => 했을 때 Object 라는 값이 나오므로, false 값이 나오면 !!
            // **Falsy(거짓 같은 값)**이면 true를 반환하고, **Truthy(참 같은 값)**이면 false를 반환해.
    return (
      <div style={{ textAlign: "center", margin: "80px" }}>
        {" "}
        메뉴 정보가 없어요!
      </div>
    );

  const categorys = Object.keys(menu);
  return (
    <>
      {categorys.map((category) => {
        return (
          <section key={category}>
            <h2>{category}</h2>
            <ul className="menu">
              {menu[category].map((item) => (
                <Item
                  key={item.name}
                  item={item}
                  clickHandler={() => {
                    setModalMenu(item);
                    setModalOn(true);
                  }}
                />
              ))}
            </ul>
          </section>
        );
      })}
      {modalOn ? (
        <OrderModal
          modalMenu={modalMenu}
          setModalOn={setModalOn}
        />
      ) : null}
    </>
  );
}

export default Menu;

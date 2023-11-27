  import React from "react";
  import { TableHead } from "../TableHead";
  import { TableBody } from "../TableBody";

  import productsFromServer from "../../api/products";
  import usersFromServer from "../../api/users";
  import categoriesFromServer from "../../api/categories";

  export const ProductTable = ({ prod }) => {
    const products = prod.map((product) => {
      const category = categoriesFromServer.find((category) => category.id === product.categoryId);
      const user = usersFromServer.find((user) => user.id === category.ownerId);

      return {
        id: product.id,
        name: product.name,
        icon: product.icon,
        category: `${category.icon} - ${category.title}`,
        user: {
          name: user.name,
          sex: user.sex,
        },
      };
    });

    return (
      <>

        <table
          data-cy="ProductTable"
          className="table is-striped is-narrow is-fullwidth"
        >
          <TableHead/>

          <TableBody products={products}/>
        </table>
      </>
    )
  }


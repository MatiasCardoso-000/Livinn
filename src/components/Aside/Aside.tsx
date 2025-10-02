import { Field, Form, Formik } from "formik";
import useSearch from "../../hooks/useSearch";
import Button from "../Button/Button";


export const Aside = () => {
  const { setSearchRestaurant, setSearchForCapacity,setSearchForCategory,setSearchForPrice,searchForPrice } = useSearch();

  return (
    <aside className="w-full md:w-1/4 lg:w-1/5 p-6 bg-white rounded-xl shadow-sm border border-gray-100 h-fit">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Filtros</h3>
      <Formik
        initialValues={{
          restaurant: "",
          capacity: "",
          category: "",
          price: searchForPrice
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSearchRestaurant(values.restaurant);
          setSearchForCapacity(Number(values.capacity));
          setSearchForCategory(values.category)
          setSearchForPrice(values.price)
          setSubmitting(false);
        }}
      >
        {({ handleSubmit }) => (
          <Form onChange={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="restaurant" className="block text-sm font-medium text-gray-700 mb-1">Restaurante</label>
              <Field
                id="restaurant"
                name="restaurant"
                autoComplete="off"
                type="text"
                placeholder="Nombre..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="capacity" className="block text-sm font-medium text-gray-700 mb-1">Personas</label>
              <Field
                id="capacity"
                name="capacity"
                type="number"
                placeholder="Cantidad"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

             <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
              <Field
                id="category"
                name="category"
                type="text"
                placeholder="Categoria"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

             <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Precio</label>
              <Field
                id="price"
                name="price"
                type="range"
                min={0}
                max={15000}
                className="w-full py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <span>{searchForPrice}</span>
            </div>


            <Button type="submit" className="w-full bg-orange-500 text-white py-1 rounded-md hover:bg-orange-600">Buscar</Button>
          </Form>
        )}
      </Formik>
    </aside>
  );
};
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddTable = () => {
  const { user } = useContext(AuthContext);
  const handleAddTable = async (event) => {
    event.preventDefault();
    const form = event.target;
    const length = form.length.value;
    const width = form.width.value;
    const price = form.price.value;
    const shape = form.shape.value;
    const capacity = form.capacity.value;
    const description = form.description.value;
    const photo = form.photo.value;

    const newTable = {
      length,
      width,
      price,
      capacity,
      description,
      photo,
      shape,
      availability: false,
      restaurantName: user?.displayName,
      restaurantEmail: user?.email,
    };
    axios.post("http://localhost:3000/addtable", newTable).then((data) => {
      if (data.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Table Added Successfully",
          showConfirmButton: false,
          timer: 800,
        });
      }
    });
  };
  return (
    <div className="card flex-shrink-0 md:w-1/2 my-10 shadow-2xl bg-[#FFF8EE] mx-auto">
      <div className="card-body">
        <h1 className="text-3xl text-center font-bold text-red-600">
          Add Table
        </h1>
        <p className="text-red-600 text-center border border-[#E94339] rounded-lg font-semibold"></p>
        <form onSubmit={handleAddTable}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Size in feet (Length X Width)</span>
            </label>
            <div className="flex gap-1">
              <input
                type="number"
                name="length"
                step="0.01"
                placeholder="5.00 feet"
                className="input input-bordered bg-gray-100 w-3/7"
                required
              />
              <p className="w-1/7 text-4xl text-center text-gray-500">X</p>
              <input
                type="number"
                name="width"
                step="0.01"
                placeholder="4.5 feet"
                className="input input-bordered bg-gray-100 w-3/7"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Shape</span>
            </label>
            <select
              type="text"
              name="shape"
              placeholder="Ex: 60"
              className="input input-bordered bg-gray-100 "
            >
              <option disabled defaultValue>
                Enter Table Shape
              </option>
              <option value="round">Round</option>
              <option value="square">Square</option>
              <option value="rectangle">Rectangle</option>
              <option value="booth">Booth Seating</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rent per hour in Taka</span>
            </label>
            <input
              type="number"
              name="price"
              step="0.01"
              placeholder="Ex: 60"
              className="input input-bordered bg-gray-100 "
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Person Capacity</span>
            </label>
            <input
              type="number"
              name="capacity"
              placeholder="Ex: 5"
              className="input input-bordered bg-gray-100"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              id="description"
              cols="10"
              rows="5"
              className="input-bordered bg-gray-100 border rounded-md p-3"
              placeholder="Write description about this item"
            ></textarea>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered bg-gray-100"
              required
            />
          </div>
          <div className="form-control mt-6 w-1/2 mx-auto">
            <input
              type="submit"
              value="Add"
              className="btn bg-[#E94339] text-white hover:border hover:border-[#E94339] hover:text-[#E94339]"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTable;

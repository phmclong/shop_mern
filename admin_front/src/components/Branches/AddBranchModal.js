import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
  useRef,
  Fragment,
} from "react";

import { useHistory } from "react-router-dom";

import AuthContext from "../../context/auth-context";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Modal from "../UI/Modal";

import classes from "./AddBranchModal.module.css";

const AddBranchModal = (props) => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [provinceId, setProvinceId] = useState();

  const authCtx = useContext(AuthContext);

  const branchNameRef = useRef();
  const branchAddressRef = useRef();
  const [selectedProvince, setSelectedProvince] = useState();
  const [selectedDistrict, setSelectedDistrict] = useState();

  const [error, setError] = useState();
  const history = useHistory();

  const fetchMapHandler = useCallback(async () => {
    const url = "http://localhost:8080/map";
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + authCtx.token,
      },
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Could not authenticate you!");
        }
        return res.json();
      })
      .then((data) => {
        setProvinces(data[0].tinh);
        setDistricts(data[0].huyen);
      });
  }, [authCtx.token]);

  useEffect(() => {
    fetchMapHandler();
  }, [fetchMapHandler]);

  const addBranchHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    const branchName = branchNameRef.current.value;
    const branchAddress = branchAddressRef.current.value;
    formData.append("name", branchName);
    formData.append("address", branchAddress);
    formData.append("province", selectedProvince);
    formData.append("district", selectedDistrict);
    const url = "http://localhost:8080/branch";

    await fetch(url, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: "Bearer " + authCtx.token,
      },
    })
      .then((res) => {
        if (res.status === 400) {
          setError({
            title: "Chi nhánh này đã được tạo",
            message: "Vui lòng nhập tên chi nhánh mới",
          });
          console.log("Already created");
        } else if (res.status !== 200 && res.status !== 201) {
          setError({
            title: "Có lỗi xảy ra",
          });
          console.log("Creating or editing a branch failed!");
        }

        return res.json();
      })
      .then((data) => {
        props.onAddBranch();
        history.replace("/branches");
      });
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Modal onClose={props.onAddBranch}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <form onSubmit={addBranchHandler}>
          <div className={classes.content}>
            <div className={classes["form-group"]}>
              <div className={classes["input-name"]}>Name</div>
              <input
                type="text"
                name="name"
                required
                ref={branchNameRef}
              ></input>
            </div>
            <div className={classes["form-group"]}>
              <div className={classes["input-name"]}>Address</div>
              <input
                type="text"
                name="address"
                required
                ref={branchAddressRef}
              ></input>
            </div>
            <div className={classes["form-group"]}>
              <div className={classes["input-name"]}>Province</div>
              <select
                className="input"
                required
                onChange={(event) => {
                  setProvinceId(event.target.selectedIndex);
                  setSelectedProvince(event.target.value);
                }}
              >
                <option disabled selected value>
                  Select a province
                </option>
                {provinces.map((item, index) => {
                  return (
                    <option key={index} value={item.name}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className={classes["form-group"]}>
              <div className={classes["input-name"]}>District</div>
              <select
                className="input"
                required
                onChange={(event) => {
                  setSelectedDistrict(event.target.value);
                }}
              >
                <option disabled selected value>
                  Select a district
                </option>
                {districts.map((item, index) => {
                  if (item.tinh_id === provinceId) {
                    return (
                      <option key={index} value={item.name}>
                        {item.name}
                      </option>
                    );
                  }
                  return null;
                })}
              </select>
            </div>
          </div>
          <footer className={classes.actions}>
            <Button type="submit">Add Branch</Button>
          </footer>
        </form>
      </Modal>
    </Fragment>
  );
};

export default AddBranchModal;

import { useState, Fragment } from "react";

import Layout from "../components/Layout/Layout";
import BranchHeader from "../components/Branches/BranchHeader";
import BranchContent from "../components/Branches/BranchContent";
import AddBranchModal from "../components/Branches/AddBranchModal";
import EditBranchModal from '../components/Branches/EditBranchModal'

const BranchesPage = () => {
  const [isAddBranchModalShow, setIsAddBranchModalShow] = useState(false);
  const [isEditBranchModalShow, setIsEditBranchModalShow] = useState(false);
  const [idEditedBranch, setIdEditedBranch] = useState();
  
  const addBranchModalHandler = () => {
    setIsAddBranchModalShow(!isAddBranchModalShow);
  };

  const editBranchModalHandler = (_id) => {
    setIsEditBranchModalShow(!isEditBranchModalShow);
    setIdEditedBranch(_id);
  }
  return (
    <Fragment>
      {isAddBranchModalShow && (
        <AddBranchModal onAddBranch={addBranchModalHandler} title="Add Branches" />
      )}
      {isEditBranchModalShow && (
        <EditBranchModal onEditBranch={editBranchModalHandler} _id={idEditedBranch} title="Edit Branches" />
      )}
      <Layout>
        <BranchHeader onAddBranch={addBranchModalHandler} />
        <BranchContent onEditBranch={editBranchModalHandler} />
      </Layout>
    </Fragment>
  );
};

export default BranchesPage;

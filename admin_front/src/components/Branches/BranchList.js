import { Fragment } from "react";
import BranchItem from "./BranchItem";

const BranchList = (props) => {
  if (props.items.length === 0) {
    return <div>No branch found</div>;
  }
  const onChildInputCheck = (id, checked) => {
    props.onChildInputCheck(id, checked);
  };
  const onEditBranch = (_id) => {
    props.onEditBranch(_id);
  }

  return (
    <Fragment>
      {props.items.map((branch) => (
        <BranchItem
          onChildInputCheck={onChildInputCheck}
          onEditBranch={onEditBranch}
          key={branch.id}
          id={branch.id}
          _id={branch._id}
          name={branch.name}
          province={branch.province}
          address={branch.address}
          createdAt={branch.createdAt}
          isChecked={branch.isChecked}
        />
      ))}
    </Fragment>
  );
};

export default BranchList;

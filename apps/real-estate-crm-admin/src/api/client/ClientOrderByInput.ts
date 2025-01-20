import { SortOrder } from "../../util/SortOrder";

export type ClientOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  notes?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
};


import { Form } from "../models/form";
import { User } from "../models/user";

export class DataFactory {
  public static getUserDetails(): User {
      return {
        firstName: "Alden",
        lastName: "Cantrell",
        age: "30",
        email:"test@test.com",
        salary: "12345",
        department:"QA"
      };
    }

    public static getFormData(): Form {
      return {
        firstName: "Gerimedica",
        lastName: "BV",
        email: "test@test.com",
        mobileNmbr: "0123456789",
        dob:"15 Aug 2023",
        subject: "Playwright Assignment",
        currentAddress: "Netherlands",
        state:"NCR",
        city:"Delhi"
      };
  }
}



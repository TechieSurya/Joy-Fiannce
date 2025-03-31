import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";
import { FaEnvelope } from "react-icons/fa";

import PhoneInput from "../group-input/PhoneInput";

export default function InputGroup() {
  const countries = [
    { code: "In", label: "+91" },
    { code: "US", label: "+1" },
  ];
  const handlePhoneNumberChange = (phoneNumber) => {
    console.log("Updated phone number:", phoneNumber);
  };
  return (
    <ComponentCard title="Input Group">
      <div className="space-y-6">
        <div>
          <Label>Email</Label>
          <div className="relative">
            <Input
              placeholder="info@gmail.com"
              type="text"
              className="pl-[62px]"
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <FaEnvelope className="size-6" />
            </span>
          </div>
        </div>
        <div>
          <Label>Phone</Label>
          <PhoneInput
            selectPosition="start"
            countries={countries}
            placeholder="+91 9876543210"
            onChange={handlePhoneNumberChange}
          />
        </div>
        <div>
          <Label>Phone</Label>
          <PhoneInput
            selectPosition="end"
            countries={countries}
            placeholder="+91 9876543210"
            onChange={handlePhoneNumberChange}
          />
        </div>
      </div>
    </ComponentCard>
  );
}
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "./ui/input";
import Select from "./ui/select";
import Textarea from "./ui/textarea";
import { Button } from "./ui/button";
import { db } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";
import { motion } from "framer-motion";

const inquirySchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: yup.string().optional(),
  projectType: yup.string().required("Please select a project type"),
  budget: yup.string().required("Please select a budget range"),
  timeline: yup.string().required("Please select a timeline"),
  projectDescription: yup.string().required("Please describe your project"),
});

type InquiryFormInputs = {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  budget: string;
  timeline: string;
  projectDescription: string;
};

const InquiryForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<InquiryFormInputs>({
    resolver: yupResolver(inquirySchema),
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [hasSubmitted, setHasSubmitted] = React.useState(false);

  const onSubmit: SubmitHandler<InquiryFormInputs> = (data) => {
    setIsSubmitting(true);
    const payload = {
      ...data,
      createdAt: new Date(),
    }
    addDoc(collection(db, "inquiries"), payload)
      .then(() => {
        setTimeout(() => setHasSubmitted(true), 1000);
        console.log("Inquiry successfully submitted!");
      })
      .catch((error) => {
        console.error("Error submitting inquiry: ", error);
      })
      .finally(() => {
        setTimeout(() => setIsSubmitting(false), 1000);
      });
  };

  const formIsFilled = Object.entries(watch()).every(
    ([key, value]) => key === "phone" || (value !== undefined && value !== "")
  );

  function handleReset() {
    reset({});
    setHasSubmitted(false);
  }

  return (
    <div>
      <motion.form 
        initial={{ height: "auto" }}
        animate={hasSubmitted ? { height: 0, overflow: 'hidden' } : {}}
        transition={{ duration: 0.5 }}

      onSubmit={handleSubmit(onSubmit)} className="w-full relative">
        <Input
          label="Name"
          id="name"
          placeholder="Your full name"
          register={register("name")}
          error={errors.name}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Input
            label="Email"
            id="email"
            type="email"
            placeholder="Your email address"
            register={register("email")}
            error={errors.email}
          />
          <Input
            label="Phone (Optional)"
            id="phone"
            type="tel"
            placeholder="Your phone number"
            register={register("phone")}
            error={errors.phone}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Select
            label="Project Type"
            id="projectType"
            options={[
              { value: "Website Development", label: "Website Development" },
              { value: "Web App Development", label: "Web App Development" },
              {
                value: "Mobile App Development",
                label: "Mobile App Development",
              },
              { value: "UI/UX Design", label: "UI/UX Design" },
              { value: "E-commerce", label: "E-commerce" },
              { value: "Other", label: "Other" },
            ]}
            placeholder="Select a project type"
            register={register("projectType")}
            error={errors.projectType}
          />
          <Select
            label="Budget"
            id="budget"
            options={[
              { value: "Less than $1,000", label: "Less than $1,000" },
              { value: "$1,000–$5,000", label: "$1,000–$5,000" },
              { value: "$5,000–$10,000", label: "$5,000–$10,000" },
              { value: "$10,000+", label: "$10,000+" },
            ]}
            placeholder="Select your budget range"
            register={register("budget")}
            error={errors.budget}
          />
          <Select
            label="Timeline"
            id="timeline"
            options={[
              { value: "1–2 weeks", label: "1–2 weeks" },
              { value: "1 month", label: "1 month" },
              { value: "2–3 months", label: "2–3 months" },
              { value: "Flexible", label: "Flexible" },
            ]}
            placeholder="Select a timeline"
            register={register("timeline")}
            error={errors.timeline}
          />
        </div>
        <Textarea
          label="Project Description"
          id="projectDescription"
          placeholder="Briefly describe your project"
          register={register("projectDescription")}
          error={errors.projectDescription}
        />
        <motion.div
          className="absolute"
          initial={{ y: 0, scale: 1, zIndex: 0 }}
          animate={
            isSubmitting
              ? {
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  scale: 1.2,
                  zIndex: 50,
                  width: "fit-content",
                }
              : {
                  top: "auto",
                  left: "auto",
                  transform: "none",
                  scale: 1,
                  zIndex: 0,
                  width: "100%",
                }
          }
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            disabled={!formIsFilled}
            isLoading={isSubmitting}
          >
            Make Magic Happen
          </Button>
        </motion.div>
      </motion.form>
      <motion.div
        initial={{ height: 0 }}
        animate={hasSubmitted ? { height: "auto" } : { height: 0 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
        >
          {hasSubmitted && (
            <div className="text-center text-lg">
              <p className="mb-3">
                Message sent. Prepare for launch 🚀!
              </p>
              <Button
                onClick={handleReset}
              >
                Awesome!
              </Button>
            </div>
          )}

      </motion.div>
    </div>
  );
};

export default InquiryForm;

import PasswordInput from "ui/Password";
import Input from "ui/Input";

export const resetPasswordFields = {
  initialValues: {
    password: "",
    confirm_password: "",
  },
  fields: [
    {
      name: "password",
      component: PasswordInput,
      placeholder: "enter new password",
      minLength: 4,
      maxLength: 15,
    },
    {
      name: "confirm_password",
      component: PasswordInput,
      placeholder: "confirm new password",
      minLength: 4,
      maxLength: 15,
    },
  ],
};

export const signUpFields = {
  initialValues: {
    full_name: "",
    email: "",
    password: "",
    country_code: "91",
    mobile_number: "",
    city: "",
  },
  fields: [
    {
      name: "full_name",
      component: Input,
      type: "text",
      placeholder: "full name",
      minLength: 2,
      maxLength: 50,
      validate: (value) => {
        if (value) {
          if (!/^(?=.{2,50}$)[a-zA-Z]+(\s[a-zA-Z]+)?$/i.test(value)) {
            return "please enter a valid name";
          }
        }
      },
    },
    {
      name: "email",
      component: Input,
      type: "email",
      placeholder: "email",
      maxLength: 100,
      validate: (value) => {
        if (value) {
          if (
            !/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/i.test(
              value
            )
          ) {
            return "please enter a valid email";
          }
        }
      },
    },
    {
      name: "password",
      component: PasswordInput,
      placeholder: "password",
      minLength: 4,
      maxLength: 15,
      validate: (value) => {
        if (value) {
          if (!/^[A-Za-z0-9]{4,15}$/i.test(value)) {
            return "password should be between 4 to 15 letters";
          }
        }
      },
    }
  ],
};

export const otpFields = {
  initialValues: {
    key1: "",
    key2: "",
    key3: "",
    key4: "",
  },
  fields: [
    {
      name: "key1",
      component: Input,
      type: "text",
      maxLength: 1,
      validate: (value) => {
        if (value) {
          if (!/^[0-9]+$/i.test(value)) {
            return "incorrect format";
          }
        } else {
          return "required";
        }
      },
    },
    {
      name: "key2",
      component: Input,
      type: "text",
      maxLength: 1,
      validate: (value) => {
        if (value) {
          if (!/^[0-9]+$/i.test(value)) {
            return "incorrect format";
          }
        } else {
          return "required";
        }
      },
    },
    {
      name: "key3",
      component: Input,
      type: "text",
      maxLength: 1,
      validate: (value) => {
        if (value) {
          if (!/^[0-9]+$/i.test(value)) {
            return "incorrect format";
          }
        } else {
          return "required";
        }
      },
    },
    {
      name: "key4",
      component: Input,
      type: "text",
      maxLength: 1,
      validate: (value) => {
        if (value) {
          if (!/^[0-9]+$/i.test(value)) {
            return "incorrect format";
          }
        } else {
          return "required";
        }
      },
    },
  ],
};

export const imageSources = {
  english: "/images/planner_quiz_banner_english.webp",
  hindi: "/images/planner_quiz_banner_hindi.webp",
  gujarati: "/images/planner_quiz_banner_gujarati.webp",
  marathi: "/images/planner_quiz_banner_marathi.webp",
};

export const homeData = {
  qualities: {
    status: 200,
    message: "success",
    data: [
      {
        id: 1,
        activity_id: "1,2,3",
        name: "Self-confidence",
      },
      {
        id: 2,
        activity_id: "1,3",
        name: "Boldness",
      },
      {
        id: 3,
        activity_id: "3",
        name: "Tolerance",
      },
      {
        id: 4,
        activity_id: "3",
        name: "Patience",
      },
      {
        id: 5,
        activity_id: "3",
        name: "Honesty - loyalty",
      },
      {
        id: 6,
        activity_id: "3,4",
        name: "Kindness",
      },
      {
        id: 7,
        activity_id: "3,4",
        name: "Dedication",
      },
      {
        id: 8,
        activity_id: "3,4",
        name: "Satisfaction",
      },
      {
        id: 9,
        activity_id: "2",
        name: "Intelligence",
      },
      {
        id: 10,
        activity_id: "3",
        name: "Discipline",
      },
      {
        id: 11,
        activity_id: "3",
        name: "Jolly",
      },
      {
        id: 12,
        activity_id: "3,4",
        name: "Spirit to help",
      },
      {
        id: 13,
        activity_id: "3",
        name: "Patriotism",
      },
      {
        id: 14,
        activity_id: "3",
        name: "Energetic nature",
      },
      {
        id: 15,
        activity_id: "3,4",
        name: "Devotional",
      },
      {
        id: 16,
        activity_id: "2",
        name: "Initiative",
      },
      {
        id: 17,
        activity_id: "2,4",
        name: "Entrepreneurship",
      },
      {
        id: 18,
        activity_id: "2,3",
        name: "Wisdom",
      },
      {
        id: 19,
        activity_id: "3",
        name: "Coordination",
      },
      {
        id: 20,
        activity_id: "2",
        name: "Lighthouse",
      },
      {
        id: 21,
        activity_id: "3",
        name: "Humbleness",
      },
      {
        id: 22,
        activity_id: "2",
        name: "Inquisitive",
      },
      {
        id: 23,
        activity_id: "3",
        name: "Respect the elders",
      },
      {
        id: 24,
        activity_id: "1",
        name: "Strong",
      },
    ],
  },
  activities: {
    status: 200,
    message: "success",
    data: [
      {
        id: 1,
        activity_name: "Dear mom",
        activity_image:
          "https://plus.unsplash.com/premium_photo-1668806643941-e1f8b2db83f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auhref=format&fit=crop&w=774&q=80",
        activity_status: false,
      },
      {
        id: 2,
        activity_name: "Garbh Sambvad",
        activity_image:
          "https://plus.unsplash.com/premium_photo-1668806643941-e1f8b2db83f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auhref=format&fit=crop&w=774&q=80",
        activity_status: true,
      },
      {
        id: 3,
        activity_name: "Dear mom",
        activity_image:
          "https://plus.unsplash.com/premium_photo-1668806643941-e1f8b2db83f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auhref=format&fit=crop&w=774&q=80",
        activity_status: false,
      },
      {
        id: 4,
        activity_name: "Story",
        activity_image:
          "https://plus.unsplash.com/premium_photo-1668806643941-e1f8b2db83f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auhref=format&fit=crop&w=774&q=80",
        activity_status: true,
      },
      {
        id: 5,
        activity_name: "Puzzle",
        activity_image:
          "https://plus.unsplash.com/premium_photo-1668806643941-e1f8b2db83f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auhref=format&fit=crop&w=774&q=80",
        activity_status: false,
      },
      {
        id: 6,
        activity_name: "Activity",
        activity_image:
          "https://plus.unsplash.com/premium_photo-1668806643941-e1f8b2db83f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auhref=format&fit=crop&w=774&q=80",
        activity_status: false,
      },
      {
        id: 7,
        activity_name: "From Biography",
        activity_image:
          "https://plus.unsplash.com/premium_photo-1668806643941-e1f8b2db83f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auhref=format&fit=crop&w=774&q=80",
        activity_status: false,
      },
      {
        id: 8,
        activity_name: "Video-Audio",
        activity_image:
          "https://plus.unsplash.com/premium_photo-1668806643941-e1f8b2db83f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auhref=format&fit=crop&w=774&q=80",
        activity_status: false,
      },
      {
        id: 9,
        activity_name: "Garbh Satsang",
        activity_image:
          "https://plus.unsplash.com/premium_photo-1668806643941-e1f8b2db83f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auhref=format&fit=crop&w=774&q=80",
        activity_status: false,
      },
    ],
  },
  "add-ons": {
    status: 200,
    message: "success",
    data: [
      {
        id: 1,
        addOn_name: "Daily live yoga",
        addOn_image:
          " https://happygs.garbhsanskarguru.com/uploads/App_module/62b4493ecd6391655982398.png",
        addOn_status: false,
      },
      {
        id: 2,
        addOn_name: "Weekly live class",
        addOn_image:
          "https://happygs.garbhsanskarguru.com/uploads/App_module/62b4499a4243b1655982490.png",
        addOn_status: true,
      },
    ],
  },
};

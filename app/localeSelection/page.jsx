"use client";

import React, { useCallback, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/localeSelection.css";
import { useRouter } from "next/navigation";
import QuestionMarkIcon from "@/public/icons/ic_question_mark.svg";
const Page = () => {
  const router = useRouter();
  const [user, setUser] = useState([]);
  const [languages, setLanguages] = useState([]);

  const getLanguages = useCallback(async (token) => {
    fetch(`${process.env.NEXT_PUBLIC_API}/language`, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLanguages(data);
      })
      .catch((error) => console.error(error.message));
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUser(data);
    if (!data?.token) {
      router.push("/auth/login");
    }
    getLanguages(data?.token);
  }, []);

  const handleClick = async (lang) => {
    fetch(`${process.env.NEXT_PUBLIC_API}/changelanguage/${lang}`, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${user?.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 401) {
          toast.error(data.message, {
            className: "error_toast",
          });
        } else {
          localStorage.setItem('user', JSON.stringify({ ...user, user_lang: `${lang}` }))
          
          router.push("/pregStatus");
        }
      })
      .catch((error) => console.error("err", error));
  };

  return (
    <>
      <ToastContainer />
      <section id="localization">
        <h1 className="locale_heading">select your language</h1>
        <div className="locale_grid">
          {languages?.data?.map((locale, i) => {
            return (
              <div
                onClick={() => handleClick(locale.alies_name)}
                key={i}
                className="locale_element"
                role="button"
              >
                <p className="language">{locale.display_language}</p>
                {locale.alies_name === "marathi" && (
                  <div
                    onClick={()=> toast.info('abc')}
                    title="Preliminary Release, improvements ongoing"
                    className="bg-black rounded-md absolute bottom-0 right-2 h-6 flex items-center gap-3 px-[2px] "
                  >
                    <p className="m-0 leading-tight text-white text-sm">beta</p>
                    <QuestionMarkIcon className="question_icon w-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <h2 className="locale_footer">
          positive energy app, helps to have happy and healty child
        </h2>
      </section>
    </>
  );
};

export default Page;

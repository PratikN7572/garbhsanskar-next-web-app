"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CloseButton from "@/public/icons/cross_circle.svg";
import "@/styles/localeSelection.css";
const LanguagesDialog = () => {
  const router = useRouter();
  const [user, setUser] = useState([]);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUser(data);
    if (!data?.token) {
      router.push("/auth/login");
    } else {
      getLanguages(data.token); // Call getLanguages inside useEffect
    }
  }, [router, setUser]); // Add router and setUser to the dependency array

  const getLanguages = async (token) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/language`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setLanguages(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleClick = async (lang) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/changelanguage/${lang}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      const data = await response.json();
      if (data.status === 401) {
        toast.error(data.message, {
          className: "error_toast",
        });
      } else {
        router.push("/pregStatus");
      }
    } catch (error) {
      console.error("err", error);
    }
  };

  return (
    <dialog id="language_modal" className="rounded-lg overflow-hidden">
      <div className="modal-container flex flex-col justify-center items-center p-5 gap-3 relative">
        <form method="dialog">
          <button data-toggle="modal" data-target="#myModal">
            <CloseButton className="absolute -top-2 -right-1" />
          </button>
        </form>
        <h3 className="text-center font-semibold">select language</h3>
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
                <div className="bg-black rounded-sm absolute">
                  <p className="m-0">beta</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </dialog>
  );
};

export default LanguagesDialog;

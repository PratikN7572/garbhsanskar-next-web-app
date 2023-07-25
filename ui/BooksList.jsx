"use client";

import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import BookCard from "@/ui/BookCard";
import getBooksList from '@/lib/getBooksList';
import handleInfoStatus from '@/utils/handleInfoStatus';
import { useRouter } from 'next/navigation'

const BooksList = () => {
  const [books, setBooks] = useState([])
  const router = useRouter()
    async function getBooksApi() {
        const user = JSON.parse(localStorage.getItem('user'))
        const response = await getBooksList(user?.token);
      setBooks(response?.data)
      if (response.status === 401) {
        toast.error(response.message, {
          className: "error_toast",
        });
      }
      handleInfoStatus(response.status, router)
    }
    useEffect(() => {
        getBooksApi()
    }, [])
    
    return (
      <>
        <ToastContainer/>
    {books?.map((book, i) => (
        <Link key={book.key} href={`/dashboard/books/${book.key}`}>
        <BookCard footer_text={book.footer_text} header_text={book.header_text} middle_text={book.middle_text} thumbnail_image={book.thumbnail_image} />
        </Link>
    ))} 
    </>
  )
}

export default BooksList
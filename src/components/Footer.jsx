import React from 'react'

export default function Footer(){
  return (
    <footer className="py-8 bg-white border-t">
      <div className="mx-auto container-max px-6 text-sm text-slate-600">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Appicoders. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

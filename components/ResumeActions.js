"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";
import { site } from "@/data/content";

export default function ResumeActions() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else if (!open && dialog.open) {
      dialog.close();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const onClose = () => {
      setOpen(false);
      document.body.style.overflow = "";
      triggerRef.current?.focus();
    };
    const onBackdropClick = (event) => {
      if (event.target === dialog) dialog.close();
    };

    dialog.addEventListener("close", onClose);
    dialog.addEventListener("click", onBackdropClick);
    return () => {
      dialog.removeEventListener("close", onClose);
      dialog.removeEventListener("click", onBackdropClick);
    };
  }, []);

  return (
    <>
      <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] min-[420px]:w-auto"
        >
          <Icon name="eye" className="h-4 w-4" />
          Preview resume
        </button>
        <a
          href={site.resume}
          download
          className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:border-accent active:translate-y-0 active:scale-[0.98] min-[420px]:w-auto"
        >
          <Icon name="download" className="h-4 w-4" />
          Download resume
        </a>
        <a
          href={`mailto:${site.email}`}
          className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:border-accent active:translate-y-0 active:scale-[0.98] min-[420px]:w-auto"
        >
          <Icon name="mail" className="h-4 w-4" />
          Send email
        </a>
      </div>

      <dialog
        ref={dialogRef}
        aria-label="Resume preview"
        className="m-auto w-[min(92vw,900px)] max-w-none rounded-2xl border border-border bg-surface p-0 text-foreground shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm open:flex open:flex-col"
      >
        <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-3">
          <p className="font-display text-sm font-semibold">Resume</p>
          <div className="flex items-center gap-2">
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Icon name="arrow" className="h-4 w-4" />
              Open in new tab
            </a>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close resume preview"
              className="grid h-11 w-11 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>
        </div>

        <div className="h-[70vh] w-full bg-background">
          <object
            data={site.resume}
            type="application/pdf"
            className="h-full w-full"
            aria-label={`${site.name} resume`}
          >
            <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
              <p className="text-sm text-muted">
                Your browser can&apos;t show the PDF inline.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <a
                  href={site.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-foreground"
                >
                  Open resume
                </a>
                <a
                  href={site.resume}
                  download
                  className="inline-flex min-h-11 items-center rounded-full border border-border px-5 py-2 text-sm font-medium text-foreground"
                >
                  Download
                </a>
              </div>
            </div>
          </object>
        </div>
      </dialog>
    </>
  );
}

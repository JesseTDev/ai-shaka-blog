import { Editor, EditorContent } from "@tiptap/react";
import React, { useState } from "react";
import EditorMenuBar from "./EditorMenuBar";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

type Props = {
  contentError: string;
  editor: Editor | null;
  isEditable: boolean;
  setContent: (content: string) => void;
  title: string;
};

const Article = ({
  contentError,
  editor,
  isEditable,
  setContent,
  title,
}: Props) => {
  const [role, setRole] = useState<string>("I am a helpful assistant.");

  if (!editor) {
    return null;
  }

  const postAiContent = async () => {
    editor
      .chain()
      .focus()
      .setContent("🤖 Generating Ai Content. Please Wait...")
      .run();

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/openai`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        role: role,
      }),
    });
    
    const data = await response.json();

    editor.chain().focus().setContent(data.content).run();
    setContent(data.content);
  };

  return (
    <article className="text-gray-500 leading-8">
      {/* Ai gen */}
      {isEditable && (
        <div className="border-2 rounded-md bg-gray-100 p-3 mb-3">
          <h4 className="m-0 p-0">Generate Content with AI 🤖</h4>
          <p className="my-1 p-0 text-xs">What type of writer do you want?</p>
          <div className="flex gap-5 justify-between">
            <input
              className="border-2 rounded-md bg-gray-100 px-3 py-1 w-full"
              placeholder="Role"
              onChange={(e) => setRole(e.target.value)}
              value={role}
            />
            <button type="button" onClick={postAiContent}>
             <PaperAirplaneIcon className="h-8 w-8 text-green-700 hover:text-green-500" />
            </button>
          </div>
        </div>
      )}

      <div
        className={
          isEditable ? "border-2 rounded-md bg-gray-100 p-3" : "w-full max-w-full"
        }
      >
        {isEditable && (
          <>
            <EditorMenuBar editor={editor} />
            <hr className="border-1 mt-2 mb-5" />
          </>
        )}
        <EditorContent editor={editor} />
      </div>
      {contentError && <p className="mt-1 text-gray-800">{contentError}</p>}
    </article>
  );
};

export default Article;

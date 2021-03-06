import React, { useState, useRef, useEffect } from "react";
import "./styles/Homepagechat.scss";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { GoogleLogin } from "react-google-login";
import chats from "../../../../assets/kalai-port/chat_lasts-new.png";
firebase.initializeApp({
    apiKey: "AIzaSyBulhG9GPcAeAUgop8J5ts4NdXvHNrYWG4",
    authDomain: "kalai-portpolio-408b4.firebaseapp.com",
    projectId: "kalai-portpolio-408b4",
    storageBucket: "kalai-portpolio-408b4.appspot.com",
    messagingSenderId: "581853192296",
    appId: "1:581853192296:web:997779da90c52c30479bdd",
    measurementId: "G-27VS8XBFJH",
});
const auth = firebase.auth();
const firestore = firebase.firestore();

function Homepagechat({ color }) {
    const [user] = useAuthState(auth);

    return (
        <div className="chathome" id="chat">
            <div className="inside-chats">
                <h1 className="ms-5" style={{ color: color }}>
                    Chat
                </h1>
                <div className="left-chat ">
                    <img src={chats} className="main-chat-image img-fluid" />
                </div>
                <div className="right-chat-section">
                    <section>
                        {user ? <ChatRoom /> : <Signup color={color} />}
                    </section>
                </div>
            </div>
        </div>
    );
}

function Signup({ color }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const histroy = useHistory();
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");

    const submits = async (e) => {
        console.log(email, password);
        try {
            const result = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            localStorage.setItem("name", JSON.stringify(name));
            console.log(result);
        } catch (err) {
            switch (err.code) {
                case "auth/invalid-email":
                    break;
                case "auth/user-disabled":
                    break;
                case "auth/user-not-found":
                    break;
                case "auth/wrong-password":
                    break;
                case "auth/email-disabled":
                    break;
            }
        }
    };
    const responseGoogle = (response) => {
        console.log(response);
        console.log("tokensr", response.accessToken);
        // AcessToken(response.accessToken);
        console.log(response.Du.tf);
        // SetName(response.Du.tf);
        console.log(response.profileObj.imageUrl);
        // SetEmptyImage(response.profileObj.imageUrl);

        // const parseJwt = (token,response) => {
        //     try {
        //         return JSON.parse((response.split(".")[1]));
        //     } catch (e) {
        //         return null;
        //     }
        // };
        // return parseJwt;
    };
    return (
        <div className="login-main">
            <div className="top-inside-main">
                <div className="right-login">
                    <div className="forms">
                        <form onSubmit={handleSubmit(submits)}>
                            <h1 className="text-center mb-5">
                                Si<span style={{ color: color }}>gnup</span>
                            </h1>

                            <div className="ms mt-3">
                                <label style={{ color: color }}>Email:</label>
                                <input
                                    {...register("email", {
                                        required: "no records",
                                    })}
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => SetEmail(e.target.value)}
                                    placeholder="Enter your Name"
                                />

                                {errors.email && (
                                    <span style={{ color: "red" }}>
                                        email field is Empty
                                    </span>
                                )}
                            </div>
                            <div className="ms">
                                <label
                                    className="mt-4"
                                    style={{ color: color }}
                                >
                                    Password:
                                </label>
                                <input
                                    {...register("password", {
                                        required: true,
                                        minLength: {
                                            value: 6,
                                            message:
                                                "Minimum Password Type 6 Characters",
                                        },
                                    })}
                                    type="text"
                                    name="password"
                                    value={password}
                                    onChange={(e) =>
                                        SetPassword(e.target.value)
                                    }
                                    placeholder="Enter your password"
                                    minlength="6"
                                />

                                {errors.password && (
                                    <span style={{ color: "red" }}>
                                        password field is Empty
                                    </span>
                                )}
                            </div>
                            <div>
                                <p
                                    className="text-end mt-2 "
                                    style={{ color: "blue", fontSize: "16px" }}
                                >
                                    {/* Forget Password */}
                                </p>
                            </div>
                            {/* <GoogleLogin
                                clientId="1088280318673-bqvvomok82p2d8srattr74qocq2c9u6o.apps.googleusercontent.com"
                                buttonText="Google Login"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={"single_host_origin"}
                            /> */}
                            <button className="sub mt-4">Signin</button>
                            <div className="logos">
                                <div></div>

                                <p
                                    className="text-middle mt-4 fs-5 fw-3 text-center"
                                    style={{
                                        color: "black",
                                        fontSize: "18px",
                                        fontWeight: "700",
                                    }}
                                ></p>
                                <div></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SignOut() {
    return (
        auth.currentUser && (
            <button
                className="sign-out-chat mt-2 mb-2"
                onClick={() => auth.signOut()}
            >
                Sign Out
            </button>
        )
    );
}

function ChatRoom() {
    const dummy = useRef();
    const messagesRef = firestore.collection("messages");
    const query = messagesRef.orderBy("createdAt");

    const [messages] = useCollectionData(query, { idField: "id" });

    const [formValue, setFormValue] = useState("");

    const sendMessage = async (e) => {
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL,
        });

        setFormValue("");
        // dummy.current.scrollIntoView({ behavior: "smooth" });
    };
    // console.log("received messages", messages);
    return (
        <>
            <div className="chat-room-main">
                <div className="inside-main-kalai-chat">
                    <div className="signout-headers px-3">
                        <SignOut />
                    </div>
                    <div className="main-message-chat">
                        <main>
                            {messages &&
                                messages.map((msg) => (
                                    <ChatMessage key={msg.id} message={msg} />
                                ))}

                            <span ref={dummy}></span>
                        </main>
                    </div>

                    <div className="bottom-chats mb-5">
                        <form onSubmit={sendMessage}>
                            <div className="input-flex">
                                <input
                                    value={formValue}
                                    onChange={(e) =>
                                        setFormValue(e.target.value)
                                    }
                                    placeholder="Enter The Message"
                                />

                                <button
                                    type="submit"
                                    className="inputs"
                                    disabled={!formValue}
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

function ChatMessage(props) {
    const { text, uid, photoURL, createdAt } = props.message;
    const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
    let creates = createdAt;
    let date = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    }).format(creates);
    console.log("receiveds", date);
    return (
        <>
            <div className={`message ${messageClass}`}>
                {/* <img src={photoURL} /> */}
                <img
                    src={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ37yG5-QaQTIf0RqanFGmCl-7fl1-J-YEalw&usqp=CAU"
                    }
                />
                <p>{text}</p>
                {/* <p>{date}</p> */}
            </div>
        </>
    );
}
export default Homepagechat;

import React from 'react'

const auth = window.firebase.auth();
const provider = new window.firebase.auth.GoogleAuthProvider();

export const logIn = (user) => {
    auth.signInWithPopup(provider);
    console.log(user)
}
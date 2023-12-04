import fetch from 'node-fetch';
import axios from "axios";
const verIndex = async (req, res) => {
    const autorizacion=req.session.token;
    if(autorizacion==null) {
        res.redirect("/login")
      }
    res.render('indexadmin');
};
export {verIndex};

"use client";
import { FaWhatsapp } from "react-icons/fa";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

const Whatsapp = () => {
  return (
    <WhatsAppWidget
      phoneNo="+8801996852634"
      position="right"
      widgetWidth="300px"
      widgetWidthMobile="260px"
      autoOpen={false}
      autoOpenTimer={5000}
      messageBox={true}
      messageBoxTxt="Hi Team, is there any related service available ?"
      iconSize="50"
      iconColor="white"
      iconBgColor="#111827"
      headerIcon="https://weerodigital.com/assets/Event-Logo-d9ca8408.png"
      headerIconColor="#111827"
      headerTxtColor="white"
      headerBgColor="#111827"
      headerTitle="Weero Digital"
      headerCaption="Online"
      bodyBgColor="#bbb"
      chatPersonName="Support"
      chatMessage={
        <>
          Hi there 👋 <br />
          <br /> How can I help you?
        </>
      }
      footerBgColor="#999"
      placeholder="Type a message.."
      btnBgColor="#111827"
      btnTxt="Start Chat"
      btnTxtColor="white"
    />
  );
};

export default Whatsapp;

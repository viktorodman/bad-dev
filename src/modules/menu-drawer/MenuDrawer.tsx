import { CheckBoxOutlineBlankOutlined, DraftsOutlined, HomeOutlined, InboxOutlined, MailOutline, Menu, ReceiptOutlined } from "@mui/icons-material";
import { Button, ButtonGroup, Drawer, Grid, ListItem, ListItemIcon, ListItemText, TextField, Typography } from "@mui/material";
import { useState } from "react";


interface IMenuDrawerProps {
}

const data = [
    {
      name: "Home",
      icon: <HomeOutlined />,
    },
    { name: "Inbox", icon: <InboxOutlined /> },
    { name: "Outbox", icon: <CheckBoxOutlineBlankOutlined /> },
    { name: "Sent mail", icon: <MailOutline /> },
    { name: "Draft", icon: <DraftsOutlined /> },
    { name: "Trash", icon: <ReceiptOutlined /> },
  ];

const MenuDrawer: React.FC = () => {
    const [open, setOpen] = useState(false);

    const getList = () => (
        <div style={{ width: 250 }} onClick={() => setOpen(false)}>
        {data.map((item, index) => (
            <ListItem button key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
            </ListItem>
        ))}
        </div>
    );
  
    return( 
        <>
            <Menu fontSize="large" onClick={() => setOpen(true)}/>
            <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
            {getList()}
            </Drawer>
        </>
        )
};

export default MenuDrawer;

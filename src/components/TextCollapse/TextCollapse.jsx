import style from './TextCollapse.module.css';
import {Box, Button, Typography} from "@mui/material";
import {useState} from "react";

export const TextCollapse = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const btnClickHandler = () => setIsOpen(prev => !prev);

  return <Box>
    <div className={`${isOpen ? '' : style.content} ${style.text}`}>
      {children}
    </div>
    <Button variant="text" type="button" onClick={btnClickHandler} className={style.button}>
      {isOpen ? 'Приховати' : 'Читати повністю'}
    </Button>
  </Box>;
}
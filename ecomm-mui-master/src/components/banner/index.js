import {Button, ListItem, ListItemButton, Typography, useMediaQuery} from "@mui/material";
import { useTheme } from "@mui/system";
import {
  BannerContainer,
  BannerContent, BannerDesc,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../../styles/banner";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer >
      <BannerContent>
        <BannerTitle variant="h2">
          Пластиковые окна по отличным ценам
        </BannerTitle>

        <Typography variant="h3">Установка и ремонт окон</Typography>
        
        <BannerDesc  variant="h2">
          <ListItem
              sx={{
                justifyContent: "center",
              }}
          >
          Работаем по всей Могилевской области
          </ListItem>
            <ListItem
                sx={{
                  justifyContent: "center",
                }}
            >
          Опыт более 15 лет
            </ListItem>
              <ListItem
                  sx={{
                    justifyContent: "center",
                  }}
              >
          Зарубежные материалы
                </ListItem>
        </BannerDesc >

        <BannerShopButton color="secondary">Заказать услуги</BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
}

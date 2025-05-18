"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

const navItems = [
  { name: "ホーム", href: "/" },
  { name: "自己紹介", href: "/about" },
  { name: "経歴", href: "/resume" },
  { name: "プロダクト", href: "/projects" },
  { name: "リンク", href: "/links" },
]

export default function Navigation() {
  const pathname = usePathname()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const currentTabIndex = navItems.findIndex((item) => item.href === pathname)

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Portfolio
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.href} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              selected={pathname === item.href}
              sx={{
                textAlign: "center",
                color: pathname === item.href ? "primary.main" : "text.primary",
              }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <AppBar
        position="sticky"
        color="default"
        elevation={0}
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          bgcolor: "background.default",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{
              mr: 2,
              fontWeight: 700,
              color: "text.primary",
              textDecoration: "none",
              flexGrow: isMobile ? 1 : 0,
            }}
          >
            Portfolio
          </Typography>

          {isMobile ? (
            <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Tabs
              value={currentTabIndex !== -1 ? currentTabIndex : false}
              textColor="primary"
              indicatorColor="primary"
              sx={{ ml: 2 }}
            >
              {navItems.map((item) => (
                <Tab
                  key={item.href}
                  label={item.name}
                  component={Link}
                  href={item.href}
                  sx={{
                    minWidth: 100,
                    textTransform: "none",
                    fontWeight: pathname === item.href ? 600 : 400,
                  }}
                />
              ))}
            </Tabs>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}

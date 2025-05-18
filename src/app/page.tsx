import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Container,
  Divider,
} from "@mui/material"
import Link from "next/link"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          py: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "md",
            mb: 2,
          }}
        >
          <Avatar
            src="/placeholder.svg?height=128&width=128"
            alt="プロフィール画像"
            sx={{
              width: 140,
              height: 140,
              mb: 3,
              boxShadow: 3,
            }}
          />
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            山田 太郎
          </Typography>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            フロントエンドエンジニア / デザイナー
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2, mb: 4, maxWidth: "sm" }}>
            モダンなウェブ技術を駆使して、美しく機能的なデジタル体験を創造することに情熱を持っています。
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
            <Button variant="contained" component={Link} href="/about" endIcon={<ArrowForwardIcon />} size="large">
              自己紹介
            </Button>
            <Button variant="outlined" component={Link} href="/projects" size="large">
              プロジェクト
            </Button>
          </Box>
        </Box>

        <Divider flexItem sx={{ my: 4 }} />

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: "100%",
                border: 1,
                borderColor: "divider",
                bgcolor: "background.paper",
              }}
            >
              <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600, color: "primary.main" }}>
                スキル
              </Typography>
              <List>
                {["React / Next.js", "TypeScript", "Material UI", "UI/UXデザイン", "レスポンシブウェブデザイン"].map(
                  (skill) => (
                    <ListItem key={skill} sx={{ py: 0.5 }}>
                      <ListItemText primary={skill} />
                    </ListItem>
                  ),
                )}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: "100%",
                border: 1,
                borderColor: "divider",
                bgcolor: "background.paper",
              }}
            >
              <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600, color: "primary.main" }}>
                最近のプロジェクト
              </Typography>
              <List>
                {[
                  { title: "ECサイトリニューアル", desc: "Next.jsとShopifyを使用したECサイトの開発" },
                  { title: "ポートフォリオサイト", desc: "React、Next.js、Material UIを使用した個人ポートフォリオ" },
                  { title: "SNSアプリ", desc: "React NativeとFirebaseを使用したモバイルアプリ開発" },
                ].map((project) => (
                  <ListItem key={project.title} sx={{ py: 1 }}>
                    <ListItemText
                      primary={project.title}
                      secondary={project.desc}
                      primaryTypographyProps={{ fontWeight: 500 }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

import { Box, Typography, Grid, Paper, Container, Divider, Avatar, List, ListItem, ListItemText } from "@mui/material"

export default function AboutPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ maxWidth: "lg", mx: "auto", mb: 8 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            自己紹介
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            私についての詳細情報
          </Typography>
        </Box>

        <Grid container spacing={6} alignItems="flex-start">
          <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
            <Avatar
              src="/placeholder.svg?height=300&width=300"
              alt="プロフィール画像"
              sx={{
                width: { xs: 200, md: 280 },
                height: { xs: 200, md: 280 },
                boxShadow: 3,
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper elevation={0} sx={{ p: 4, border: 1, borderColor: "divider" }}>
              <Typography variant="h4" gutterBottom sx={{ color: "primary.main", fontWeight: 600 }}>
                山田 太郎
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                フロントエンドエンジニア / デザイナー
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
                <Typography variant="body1">
                  私はフロントエンド開発に5年以上の経験を持つエンジニアです。ユーザー体験を重視したウェブアプリケーションの設計と開発に情熱を持っています。
                </Typography>
                <Typography variant="body1">
                  React、Next.js、TypeScriptを主な技術スタックとして使用し、モダンなウェブアプリケーションの開発に取り組んでいます。また、UI/UXデザインにも関心があり、使いやすく美しいインターフェースの作成を心がけています。
                </Typography>
                <Typography variant="body1">
                  チームでの協業経験も豊富で、アジャイル開発手法を用いたプロジェクト管理にも精通しています。常に新しい技術やトレンドに関心を持ち、継続的な学習を大切にしています。
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
            スキルセット
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  border: 1,
                  borderColor: "divider",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ color: "primary.main", fontWeight: 600 }}>
                  フロントエンド
                </Typography>
                <List dense>
                  {["HTML/CSS", "JavaScript/TypeScript", "React", "Next.js", "Material UI", "Responsive Design"].map(
                    (skill) => (
                      <ListItem key={skill} sx={{ py: 0.5 }}>
                        <ListItemText primary={skill} />
                      </ListItem>
                    ),
                  )}
                </List>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  border: 1,
                  borderColor: "divider",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ color: "primary.main", fontWeight: 600 }}>
                  バックエンド
                </Typography>
                <List dense>
                  {["Node.js", "Express", "Firebase", "RESTful API", "GraphQL"].map((skill) => (
                    <ListItem key={skill} sx={{ py: 0.5 }}>
                      <ListItemText primary={skill} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  border: 1,
                  borderColor: "divider",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ color: "primary.main", fontWeight: 600 }}>
                  その他
                </Typography>
                <List dense>
                  {["Git/GitHub", "UI/UXデザイン", "Figma", "アジャイル開発", "テスト駆動開発"].map((skill) => (
                    <ListItem key={skill} sx={{ py: 0.5 }}>
                      <ListItemText primary={skill} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mt: 8 }}>
          <Paper elevation={0} sx={{ p: 4, border: 1, borderColor: "divider" }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              趣味・関心
            </Typography>
            <Typography variant="body1">
              プログラミング以外では、写真撮影、旅行、読書を楽しんでいます。また、テクノロジーカンファレンスへの参加や、オープンソースプロジェクトへの貢献も積極的に行っています。
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Container>
  )
}

import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Container,
  Chip,
  Stack,
  Divider,
} from "@mui/material"
import Link from "next/link"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
import GitHubIcon from "@mui/icons-material/GitHub"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "ECサイトリニューアル",
      description: "Next.jsとShopifyを使用したECサイトの開発。パフォーマンスとユーザー体験を大幅に改善。",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Shopify", "Material UI"],
      link: "#",
      github: "#",
      year: "2023",
    },
    {
      id: 2,
      title: "SNSアプリ",
      description: "React NativeとFirebaseを使用したクロスプラットフォームモバイルアプリ。リアルタイム通信機能を実装。",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React Native", "Firebase", "Redux", "Expo"],
      link: "#",
      github: "#",
      year: "2022",
    },
    {
      id: 3,
      title: "ダッシュボードUI",
      description: "企業向け分析ダッシュボードのUI/UXデザインと実装。データ可視化とインタラクティブなチャートを実現。",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "D3.js", "Material UI", "GraphQL"],
      link: "#",
      github: "#",
      year: "2021",
    },
    {
      id: 4,
      title: "予約管理システム",
      description: "飲食店向けのオンライン予約管理システム。カレンダー連携と自動リマインダー機能を実装。",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Vue.js", "Node.js", "Express", "MongoDB"],
      link: "#",
      github: "#",
      year: "2020",
    },
    {
      id: 5,
      title: "コーポレートサイト",
      description: "企業のブランディングを強化するレスポンシブウェブサイト。アニメーションとインタラクションを重視。",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["HTML/CSS", "JavaScript", "GSAP", "WordPress"],
      link: "#",
      github: "#",
      year: "2019",
    },
  ]

  return (
    <Container maxWidth="lg">
      <Box sx={{ maxWidth: "lg", mx: "auto", mb: 8 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            プロダクト
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            これまでに制作したプロジェクト一覧
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} lg={4} key={project.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <CardMedia component="img" height="200" image={project.image} alt={project.title} />
                  <Chip
                    label={project.year}
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      bgcolor: "rgba(255, 255, 255, 0.9)",
                      fontWeight: 500,
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 2 }}>
                    {project.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          mb: 1,
                          bgcolor: "background.default",
                          color: "text.secondary",
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
                <Divider />
                <CardActions sx={{ p: 2, pt: 1.5, pb: 1.5 }}>
                  <Button
                    size="small"
                    endIcon={<OpenInNewIcon />}
                    component={Link}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    デモを見る
                  </Button>
                  <Button
                    size="small"
                    endIcon={<GitHubIcon />}
                    component={Link}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    コードを見る
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
            その他のプロジェクト
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: "md", mx: "auto", mb: 4 }}>
            上記以外にも、小規模なプロジェクトやオープンソースへの貢献など、様々な開発に携わっています。詳細は私のGitHubプロフィールをご覧ください。
          </Typography>
          <Button
            variant="outlined"
            endIcon={<GitHubIcon />}
            component={Link}
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            size="large"
          >
            GitHubプロフィールを見る
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

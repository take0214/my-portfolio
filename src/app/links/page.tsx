import {
  Box,
  Typography,
  Container,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Card,
  CardContent,
  CardHeader,
} from "@mui/material"
import Link from "next/link"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"
import LanguageIcon from "@mui/icons-material/Language"
import YouTubeIcon from "@mui/icons-material/YouTube"
import EmailIcon from "@mui/icons-material/Email"
import ArticleIcon from "@mui/icons-material/Article"
import SendIcon from "@mui/icons-material/Send"

export default function LinksPage() {
  const socialLinks = [
    {
      title: "GitHub",
      description: "コードとプロジェクト",
      icon: <GitHubIcon fontSize="large" />,
      url: "https://github.com",
      color: "#333333",
    },
    {
      title: "LinkedIn",
      description: "プロフェッショナルプロフィール",
      icon: <LinkedInIcon fontSize="large" />,
      url: "https://linkedin.com",
      color: "#0077B5",
    },
    {
      title: "Twitter",
      description: "最新の投稿とつぶやき",
      icon: <TwitterIcon fontSize="large" />,
      url: "https://twitter.com",
      color: "#1DA1F2",
    },
    {
      title: "ブログ",
      description: "技術記事と思考",
      icon: <LanguageIcon fontSize="large" />,
      url: "https://example.com/blog",
      color: "#2ECC71",
    },
    {
      title: "YouTube",
      description: "チュートリアルと解説動画",
      icon: <YouTubeIcon fontSize="large" />,
      url: "https://youtube.com",
      color: "#FF0000",
    },
    {
      title: "メール",
      description: "お問い合わせ",
      icon: <EmailIcon fontSize="large" />,
      url: "mailto:example@example.com",
      color: "#9C27B0",
    },
    {
      title: "履歴書",
      description: "PDFダウンロード",
      icon: <ArticleIcon fontSize="large" />,
      url: "#",
      color: "#607D8B",
    },
  ]

  return (
    <Container maxWidth="md">
      <Box sx={{ maxWidth: "md", mx: "auto", mb: 8 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            各種リンク
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            SNSやその他のプラットフォームへのリンク
          </Typography>
        </Box>

        <Card elevation={0} sx={{ mb: 6, border: 1, borderColor: "divider" }}>
          <CardHeader
            title="ソーシャルメディアとコンタクト"
            titleTypographyProps={{ variant: "h5", fontWeight: 600 }}
            subheader="以下のリンクから私のプロフィールやコンテンツをご覧いただけます"
          />
          <Divider />
          <CardContent>
            <List sx={{ width: "100%" }}>
              {socialLinks.map((link, index) => (
                <Box key={link.title}>
                  <ListItem
                    component={Link}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      py: 2,
                      borderRadius: 2,
                      transition: "all 0.2s",
                      "&:hover": {
                        bgcolor: "background.default",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ color: link.color }}>{link.icon}</ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="h6" sx={{ fontWeight: 500 }}>
                          {link.title}
                        </Typography>
                      }
                      secondary={link.description}
                    />
                  </ListItem>
                  {index < socialLinks.length - 1 && <Divider variant="inset" component="li" />}
                </Box>
              ))}
            </List>
          </CardContent>
        </Card>

        <Card elevation={0} sx={{ border: 1, borderColor: "divider" }}>
          <CardHeader
            title="お問い合わせ"
            titleTypographyProps={{ variant: "h5", fontWeight: 600 }}
            subheader="プロジェクトの依頼や質問がありましたら、お気軽にご連絡ください"
          />
          <Divider />
          <CardContent>
            <Typography variant="body1" paragraph sx={{ mb: 4 }}>
              お仕事のご依頼、コラボレーションのご提案、または単にご質問がある場合は、以下のメールアドレスまたは上記のソーシャルメディアからご連絡ください。
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<SendIcon />}
                component={Link}
                href="mailto:example@example.com"
                sx={{ px: 4, py: 1.5 }}
              >
                メールを送る
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  )
}

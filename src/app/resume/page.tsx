import { Box, Typography, Paper, Container, Grid, Chip, Divider } from "@mui/material"
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab"
import WorkIcon from "@mui/icons-material/Work"
import SchoolIcon from "@mui/icons-material/School"
import VerifiedIcon from "@mui/icons-material/Verified"

export default function ResumePage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ maxWidth: "lg", mx: "auto", mb: 8 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            経歴
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            職歴と学歴の詳細
          </Typography>
        </Box>

        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
            職歴
          </Typography>

          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">2021年 - 現在</TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <WorkIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={0} sx={{ p: 3, border: 1, borderColor: "divider" }}>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                    シニアフロントエンドエンジニア
                  </Typography>
                  <Typography color="text.secondary" gutterBottom>
                    テックカンパニー株式会社
                  </Typography>
                  <Divider sx={{ my: 1.5 }} />
                  <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                    <li>大規模ECサイトのフロントエンド開発リード</li>
                    <li>Next.jsとTypeScriptを使用したパフォーマンス最適化</li>
                    <li>ジュニアエンジニアのメンタリングとコードレビュー</li>
                    <li>マイクロフロントエンドアーキテクチャの設計と実装</li>
                    <li>デザインシステムの構築と保守</li>
                  </Box>
                </Paper>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">2018年 - 2021年</TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary" variant="outlined">
                  <WorkIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={0} sx={{ p: 3, border: 1, borderColor: "divider" }}>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                    フロントエンドエンジニア
                  </Typography>
                  <Typography color="text.secondary" gutterBottom>
                    ウェブソリューション株式会社
                  </Typography>
                  <Divider sx={{ my: 1.5 }} />
                  <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                    <li>Reactを使用した複数のウェブアプリケーション開発</li>
                    <li>レスポンシブデザインの実装とクロスブラウザ対応</li>
                    <li>RESTful APIとの連携</li>
                    <li>ユーザーインターフェースの改善と最適化</li>
                  </Box>
                </Paper>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">2017年 - 2018年</TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary" variant="outlined">
                  <WorkIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={0} sx={{ p: 3, border: 1, borderColor: "divider" }}>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                    ウェブデベロッパー（インターン）
                  </Typography>
                  <Typography color="text.secondary" gutterBottom>
                    スタートアップ企業
                  </Typography>
                  <Divider sx={{ my: 1.5 }} />
                  <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                    <li>HTML、CSS、JavaScriptを使用したウェブサイト開発</li>
                    <li>WordPressテーマのカスタマイズ</li>
                    <li>基本的なSEO対策の実施</li>
                  </Box>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>

        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
            学歴
          </Typography>

          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">2015年 - 2017年</TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="secondary">
                  <SchoolIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={0} sx={{ p: 3, border: 1, borderColor: "divider" }}>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                    情報工学修士
                  </Typography>
                  <Typography color="text.secondary" gutterBottom>
                    東京工科大学大学院
                  </Typography>
                  <Divider sx={{ my: 1.5 }} />
                  <Typography variant="body2">ウェブテクノロジーと人工知能に関する研究</Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    卒業論文: 「機械学習を活用したウェブユーザーインターフェースの最適化」
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">2011年 - 2015年</TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="secondary" variant="outlined">
                  <SchoolIcon />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={0} sx={{ p: 3, border: 1, borderColor: "divider" }}>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                    情報工学学士
                  </Typography>
                  <Typography color="text.secondary" gutterBottom>
                    東京工科大学
                  </Typography>
                  <Divider sx={{ my: 1.5 }} />
                  <Typography variant="body2">コンピュータサイエンスとソフトウェア工学を専攻</Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    プログラミングコンテスト優勝（2014年）
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>

        <Box>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
            資格・認定
          </Typography>

          <Grid container spacing={3}>
            {[
              { title: "AWS認定ソリューションアーキテクト", year: "2020年取得" },
              { title: "Google認定プロフェッショナルウェブデベロッパー", year: "2019年取得" },
              { title: "情報処理技術者試験 応用情報技術者", year: "2016年取得" },
              { title: "TOEIC 850点", year: "2018年取得" },
            ].map((cert, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    border: 1,
                    borderColor: "divider",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <VerifiedIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
                    {cert.title}
                  </Typography>
                  <Chip
                    label={cert.year}
                    size="small"
                    sx={{
                      bgcolor: "background.default",
                      color: "text.secondary",
                      fontWeight: 500,
                    }}
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}

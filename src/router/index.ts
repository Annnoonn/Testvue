import { createRouter, createWebHistory } from 'vue-router'
import quizPage from '../components/Main-page-quiz.vue'
import homePage from "../components/main-Page.vue"
import newsPage from "../components/news-page.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: quizPage
    },

    {
      path: '/actus',
      name: 'actus',
      component: newsPage
    },
  ]
})

export default router

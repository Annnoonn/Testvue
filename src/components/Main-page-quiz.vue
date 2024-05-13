<script defer setup lang="ts">
import { computed, ref } from 'vue'
import pageTitle from './pageTitle.vue'

const reloadPage = () => {
  location.reload()
}

const quiz = ref([
  {
    question: "Qu'est-ce que signifie l'acronyme ESN?",
    answer: [
      { label: '1f', isCorrect: false },
      { label: 'Entreprise de Services du Numérique.', isCorrect: true },
      { label: '1fx', isCorrect: false }
    ],
    selectedAnswer: null
  },
  {
    question: "Quel est le rôle principal d'une ESN?",
    answer: [
      { label: '2f', isCorrect: false },
      {
        label: 'fournir des services et des solutions informatiques à ses clients',
        isCorrect: true
      },
      { label: '2fx', isCorrect: false }
    ],
    selectedAnswer: null
  },
  {
    question: "Pour un dirigeant TPE/PME est-il important de s'informer à l’actu technologique ?",
    answer: [
      { label: '3fx', isCorrect: false },
      {
        label:
          "Oui, il est important pour un dirigeant TPE/PME de s'informer sur l'actualité technologique",
        isCorrect: true
      },
      { label: '3f', isCorrect: false }
    ],
    selectedAnswer: null
  },

  {
    question: 'Mon entreprise peut-elle rester à jour avec les avancées technologiques ?',
    answer: [
      { label: '4fx', isCorrect: false },
      {
        label: "Oui, mon l'entreprise peut rester à jour avec les avancées technologiques",
        isCorrect: true
      },
      { label: '4f', isCorrect: false }
    ],
    selectedAnswer: null
  },

  {
    question: 'Comment digitaliser son entreprise ?',
    answer: [
      { label: '5f', isCorrect: false },
      {
        label:
          'Mettre en place des outils informatiques, des plateformes en ligne, automatiser les processus',
        isCorrect: true
      },
      { label: '5f', isCorrect: false }
    ],
    selectedAnswer: null
  },

  {
    question: "Qu'est-ce que l'acronyme anglais 'IT' signifie en français ? ",
    answer: [
      { label: '6f', isCorrect: false },
      { label: '6f', isCorrect: false },
      { label: "Technologie de l'Information", isCorrect: true }
    ],
    selectedAnswer: null
  },

  {
    question: "Qu'est-ce que l'acronyme anglais 'IT' signifie en anglais ? ",
    answer: [
      { label: '7f', isCorrect: false },
      { label: '7f', isCorrect: false },
      { label: 'Information Technology', isCorrect: true }
    ],
    selectedAnswer: null
  }
])

const isPlaying = ref(false)

const nbCorrectAnswers = computed(() => {
  var counterAnswer = 0
  for (const question of quiz.value) {
    if (question.selectedAnswer) {
      const isAnswerCorrect = question.answer.find(
        (answer) => answer.label === question.selectedAnswer
      )?.isCorrect
      if (isAnswerCorrect) {
        counterAnswer++
      }
    }
  }
  return counterAnswer
})
</script>

<!-- Titre de base -->
<template>
  <pageTitle titleText="QUIZ" titleSubText="Testez vos connaissances" />

  <!-- Liste des questions -->
  <div class="flex flex-col items-center">
    <div class="flex flex-col items-center pt-20" v-for="(question, index) in quiz" :key="index">
      <div class="text-7 pb-3 text-center text-white bg-black rounded-md h-11 w-300">
        {{ question.question }}
      </div>

      <!-- Liste des réponses -->
      <div class="pt-3 pb-3 text-5" v-for="(answer2, index2) in question.answer" :key="index2">
        {{ answer2.label }}
        <input
          type="radio"
          :name="'question' + index"
          v-model="question.selectedAnswer"
          :value="answer2.label"
        />
      </div>
    </div>

    <!-- Bouton réponse -->
    <p class="font-700 mt-4" v-if="isPlaying === true">
      Vous avez obtenu {{ nbCorrectAnswers }} points
    </p>
    <button
      class="bg-black color-white p-3 rounded-md w-70 hover:bg-secondary duration-200 mt-1 text-5"
      @click="isPlaying = true"
    >
      Réponses
    </button>

    <button
      @click="reloadPage"
      class="mt-7 bg-black hover:bg-secondary text-white font-bold py-2 px-4 rounded duration-200"
    >
      Refaire le quiz
    </button>
  </div>
</template>

<style scoped>
input[type='radio'] {
  transform: scale(1.25);
  filter: grayscale(1);
}
</style>

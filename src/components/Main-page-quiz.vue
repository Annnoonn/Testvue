<script defer setup lang="ts">
import { computed, ref } from 'vue'

const quiz = ref([
  {
    question: "Qu'est-ce que signifie l'acronyme ESN?",
    answer: [
      { label: '1f', isCorrect: false },
      { label: '1v', isCorrect: true },
      { label: '1fx', isCorrect: false }
    ],
    selectedAnswer: null
  },
  {
    question: "Quel est le rôle principal d'une ESN?",
    answer: [
      { label: '2f', isCorrect: false },
      { label: '2v', isCorrect: true },
      { label: '2fx', isCorrect: false }
    ],
    selectedAnswer: null
  },
  {
    question: "Pour un dirigeant TPE/PME est-il important de s'informer à l’actu technologique ?",
    answer: [
      { label: '3fx', isCorrect: false },
      { label: '3v', isCorrect: true },
      { label: '3f', isCorrect: false }
    ],
    selectedAnswer: null
  },

  {
    question: "Oui, mon l'entreprise peut rester à jour avec les avancées technologiques",
    answer: [
      { label: '4fx', isCorrect: false },
      { label: '4v', isCorrect: true },
      { label: '4f', isCorrect: false }
    ],
    selectedAnswer: null
  },

  {
    question: 'Comment digitaliser son entreprise ?',
    answer: [
      { label: '5f', isCorrect: false },
      { label: '5v', isCorrect: true },
      { label: '5f', isCorrect: false }
    ],
    selectedAnswer: null
  },

  {
    question: "Qu'est-ce que l'acronyme anglais 'IT' signifie en français ? ",
    answer: [
      { label: '6f', isCorrect: false },
      { label: '6f', isCorrect: false },
      { label: '6v', isCorrect: true }
    ],
    selectedAnswer: null
  },

  {
    question: "Qu'est-ce que l'acronyme anglais 'IT' signifie en français ? ",
    answer: [
      { label: '7f', isCorrect: false },
      { label: '7f', isCorrect: false },
      { label: '7v', isCorrect: true }
    ],
    selectedAnswer: null
  }
])



const isPlaying = ref(false)
const count = ref(0)



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
  <div class="flex flex-col items-center">
    <h1 class="text-center mt-20 mb-1 text-4xl">LE QUIZ</h1>
    <div class="bg-black h-1 w-100"></div>
    <h2 class="text-3xl mt-1">Testez vos connaissances</h2>
  </div>

  <div>{{ count }}</div>

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
    <p class="font-700 mt-4" v-if="isPlaying === true">Vous avez obtenu {{ nbCorrectAnswers }} points</p>
    <button
      class="bg-black color-white p-3 rounded-md w-70 hover:bg-[#252725] duration-200 mt-1 text-5"
      @click="isPlaying = true" 
    >
      Réponses
    </button>

    
  </div>
</template>

<style scoped>
input[type='radio'] {
  transform: scale(1.25);
  filter: grayscale(1);
}
</style>

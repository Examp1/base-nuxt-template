<script setup lang="ts">
import type { NuxtError } from "#app";
defineProps({
  error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div class="error-container">
    <div class="error-content">
      <pre>
      </pre>
      <h1 class="error-code">{{ error?.statusCode }}</h1>
      <p class="error-message" v-if="error?.message">
        {{ error.message }}
      </p>
      <button class="error-button" @click="handleError">
        Вернуться на главную
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
      <!-- <div class="error-stack" v-html="error.stack"></div> -->
    </div>
  </div>
</template>

<style scoped>
.error-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background-color: #f8fafc;
}

.error-content {
  text-align: center;
  max-width: 400px;
  width: 100%;
  padding: 2.5rem;
  border-radius: 1rem;
  background-color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.error-code {
  font-size: 6rem;
  font-weight: 800;
  line-height: 1;
  color: #3b82f6;
  margin-bottom: 1.5rem;
}

.error-message {
  color: #64748b;
  font-size: 1.125rem;
  margin-bottom: 2rem;
}

.error-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: #3b82f6;
  color: white;
  font-weight: 600;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
}

.error-button:hover {
  background-color: #2563eb;
}

.error-button svg {
  transition: transform 0.2s;
}

.error-button:hover svg {
  transform: translateX(2px);
}
</style>
<template>
  <div class="h-64 p-10 w-96 m-auto">
    <div v-if="success" class="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative" role="alert">
      <span class="block sm:inline">Ажлын төрөл амжилттай бүртгэгдлээ.</span>
    </div>
    <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <span class="block sm:inline">{{error}}</span>
    </div>
    <Form @submit="onSubmit" :validation-schema="schema">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Хэрэглэгчийн нэр</label>
      <Field id="email" name="email" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"/>
      <ErrorMessage name="email" class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"/>
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Нууц үг</label>
      <Field id="password" name="password" type="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"/>
      <ErrorMessage name="password" class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"/>
      <br>
      <button class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Нэвтрэх</button>
    </Form>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'landing',
})
// Import the auth store from pinia
import { useAuth } from '~~/store/auth'
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as Yup from 'yup';

const auth = useAuth()
const router = useRouter()

const email = ref()
const password = ref()
const error = ref(null)
const loading = ref(false)

async function login() {
  loading.value = true
  error.value = null
  try {
    // Login
    await auth.login({
      email: email.value,
      password: password.value,
    })
    // Clear the form
    router.push('/');
    email.value = ''
    password.value = ''
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
}

const schema = Yup.object().shape({
  email: Yup.string().required('Хэрэглэгчийн нэрээ оруулна уу').label('Нэр'),
  password: Yup.string().required('Нууц үгээ оруулна уу').label('Нууц үг'),
});
const success = useState('success', () => false)

async function onSubmit(values) {
  email.value = values.email;
  password.value = values.password;
  await login();
}

</script>

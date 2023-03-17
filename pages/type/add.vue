<template>
  <div class="h-64 p-10 w-96 m-auto">
    <div v-if="success" class="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative" role="alert">
      <span class="block sm:inline">Ажлын төрөл амжилттай бүртгэгдлээ.</span>
    </div>
    <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <span class="block sm:inline">Ажлын төрөл амжилттай бүртгэгдлээ.</span>
    </div>
    <Form @submit="onSubmit" :validation-schema="schema">
      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Нэр</label>
      <Field id="name" name="name" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"/>
      <ErrorMessage name="name" class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"/>
      <br>
      <button class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Бүртгэх</button>
    </Form>
  </div>
</template>

<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as Yup from 'yup';

const { appTitle, directusUrl } = useRuntimeConfig()
definePageMeta({
  layout: 'landing',
})
useHead({
  title: appTitle,
})

const schema = Yup.object().shape({
  name: Yup.string().required('Нэрээ оруулна уу').label('Нэр'),
});
const success = useState('success', () => false)
const error = useState('error', () => false)

async function onSubmit(values) {
  // alert(JSON.stringify(values, null, 2));
  await useFetch(directusUrl + '/items/type', {
    method: 'POST',
    body: JSON.stringify(values, null, 2),
    onResponse({request, response, options}){
      if (response.status === 200) {
        success.value = true;
      }
    },
    onResponseError({request, response, options}) {

      if (response.status === 400) {
        error.value = true;
      }
    },
  })
}
</script>


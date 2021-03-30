<template>
  <table>
    <thead class="custom-component">
      <tr>
        <th style="text-align: left;">Methods</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <!-- <tr>
        <td style="text-align: left;">
          <router-link :to="methods.url">{{ methods.method }}</router-link>
        </td>
        <td>
          <span class="noLink">
            <router-link :to="methods.url">
              <span :class="['badge small', methods.request]">{{ methods.request }}</span>
              <span v-html="methods.linkText"></span>
            </router-link>
          </span>
          <br /><br />
          {{ methods.description }}
        </td>
      </tr> -->
    </tbody>
  </table>
</template>

<script>
  // import RestReferenceResourceSummaryEntry from './RestReferenceResourceSummaryEntry.vue';

  // export default {
  //   components: {
  //     RestReferenceResourceSummaryEntry,
  //   },
  //   data() {
  //     return {
  //       methods: [
  //         {
  //           method: this.method,
  //           description: this.description,
  //           request: this.request,
  //           linkText: this.linkText,
  //           url: this.url,
  //         },
  //       ],
  //     };
  //   },
  // };
</script>

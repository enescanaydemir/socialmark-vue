<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <app-header />
  <div class="flex flex-row">
    <Sidebar />
    <app-bookmark-list />
  </div>
</template>

<script>
import Sidebar from "@/components/Home/Sidebar";

export default {
  components: {
    Sidebar,
  },
};
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
function getDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = addZero(date.getMonth() + 1);
  const day = addZero(date.getDate());
  return `${year}${month}${day}`;
}

function addZero(value) {
  return value < 10 ? '0' + value : value;
}

export default {
  data() {
    return {};
  },
  created() {
    const wmUserInfo = localStorage.getItem('wmUserInfo');
    if (!wmUserInfo) {
      const userId = getDate() + Math.random().toString().substring(2, 10);
      localStorage.wmUserInfo = JSON.stringify({
        userId,
        userTag: 'tag',
        projectVersion: '1.0.1',
      });
    }
  },
};
</script>
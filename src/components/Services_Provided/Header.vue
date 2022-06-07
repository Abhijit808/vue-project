<template>
    <div class = "about_container">
        <h2>SERVICES</h2>
        <h2>PROVIDED</h2>
    </div>
</template>
<script>
export default {
   name:"HeaderComponents",    
}
</script>
<style lang="css" scoped>
.about_container{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: #B05454;
}
.about_container > :nth-child(1){
    color: #EF7051;
}
</style>
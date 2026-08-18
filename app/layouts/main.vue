<template>
<div class="main_Screen">

    <HeaderC />
    <!-- <div class="container"> -->
        <slot />
        
        
        <Udialog/>
    <!-- </div> -->
    <socialButtons />
    <Footer />
</div>
</template>

<style scoped lang="sass">
.main_Screen
    background: #F9FAFB
</style>
<template>
    <div>
        <Card>
            <template #header>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, placeat quaerat quod ab vitae voluptate ratione quos dolor! Ut iste fugit, perspiciatis minus numquam itaque eveniet sunt natus a fuga.</p>
            </template>
            
            <p>
                这是中间主体内容
            </p>
            <template #footer>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ex, ab neque voluptates minus facere ad labore consequuntur, modi vero repellat! Facilis excepturi unde iusto obcaecati asperiores saepe optio possimus.</p>
            </template>
        </Card>

    </div>
</template>

<script setup lang="ts">
import Card from './Card.vue';
</script>

<style scoped></style>
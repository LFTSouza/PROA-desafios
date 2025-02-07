@file:OptIn(ExperimentalMaterial3Api::class)

package com.example.aleablue.Tela

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.pager.HorizontalPager
import androidx.compose.foundation.pager.PagerState
import androidx.compose.foundation.pager.rememberPagerState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonColors
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Text
import androidx.compose.material3.carousel.HorizontalMultiBrowseCarousel
import androidx.compose.material3.carousel.rememberCarouselState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.focus.focusModifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.aleablue.Font.displayFontFamily
import com.example.aleablue.Font.pirate
import com.example.aleablue.R
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch


@Composable
fun Principal(modifier: Modifier = Modifier) {

    val pagerState = rememberPagerState(pageCount = { 5 })
    val scope = rememberCoroutineScope()

    Column(
        modifier = modifier
            .fillMaxSize()
            .background(Color(0xffff0E90AD)),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Box(
            modifier.fillMaxWidth(), contentAlignment = Alignment.Center
        ) {
            Text(
                text = "ALEA",
                color = Color.White,
                fontSize = 64.sp,
                fontFamily = displayFontFamily,
                modifier = modifier.padding(end = 180.dp)
            )

            Image(
                painter = painterResource(R.drawable.peixe),
                contentDescription = "Fish",
                modifier
                    .size(200.dp)
                    .padding(start = 10.dp)
            )
            Text(
                text = "BLUE",
                color = Color.White,
                fontSize = 64.sp,
                fontFamily = displayFontFamily,
                modifier = modifier.padding(start = 200.dp)
            )
            Text(
                text = "Dificuldade para escolher qual peixe comer? Deixe que escolhemos para você",
                textAlign = TextAlign.Center,
                color = Color.White,
                modifier = modifier.padding(top = 270.dp)
            )
        }

        Spacer(modifier.size(40.dp))

        Button(
            onClick = { Roll(pagerState, scope) },
            colors = ButtonDefaults.buttonColors(containerColor = Color(0xffff47B83D))
        ) {
            Text(
                text = "Escolha o peixe"
            )
        }
        Image(
            painterResource(R.drawable.downarrow), contentDescription = "seta", modifier.size(40.dp)
        )
        Carousel(pagerState = pagerState)
    }
}

@Composable
private fun Carousel(
    modifier: Modifier = Modifier, pagerState: PagerState
) {
    HorizontalPager(
        state = pagerState,
    ) { page ->
        Column(
            modifier = Modifier.fillMaxWidth(), horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Box(
                modifier.size(240.dp), contentAlignment = Alignment.Center
            ) {
                Image(
                    painter = painterResource(
                        when (page) {
                            0 -> R.drawable.bacalhau
                            1 -> R.drawable.salmao
                            2 -> R.drawable.tilapia
                            3 -> R.drawable.moqueca
                            else -> R.drawable.bolinho
                        }
                    ), contentDescription = null, modifier.clip(RoundedCornerShape(12.dp))
                )
            }

            Text(
                text = when (page) {
                    0 -> "Bacalhau"
                    1 -> "Salmão"
                    2 -> "Filé de Tilápia"
                    3 -> "Moqueca"
                    else -> "Bolinho de bacalhau"
                },
                color = Color.White,
                fontFamily = pirate,
                fontSize = 40.sp,
                modifier = modifier
                    .padding(bottom = 50.dp)
            )
        }
    }
}


private fun Roll(
    pagerState: PagerState, scope: CoroutineScope
) {
    scope.launch {
        //simula um giro aleatório
        val randomPage = (0..pagerState.pageCount).random();
        repeat(15) { step ->
            val targetPage = (pagerState.currentPage + 1) % pagerState.pageCount;
            pagerState.scrollToPage(targetPage);
            delay(100L - step * 5) //reduz o delay gradualmente
        } //vai aumentar a velocidade conforme o tempo

        pagerState.scrollToPage(randomPage) // vai para a pagina aleatória final
    }
}

@Preview
@Composable
fun PrincipalPreview() {
    Principal()
}

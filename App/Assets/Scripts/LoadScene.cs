﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class LoadScene : MonoBehaviour
{
    // Start is called before the first frame update
    public void SceneLoader(int SceneIndex)
    {
      SceneManager.LoadScene(SceneIndex);
    }
}
